<template>
  <label class="block flex justify-start flex-col items-start">
    <span class="text-gray-700">{{ $t("selectCountry") }}</span>
    <select
      v-model="activeCountry"
      @change="selectionChanged"
      class="
        block
        w-full
        mt-0
        px-0.5
        border-0 border-b-2 border-gray-200
        focus:ring-0
        focus:border-black
      "
    >
      <option :value="pb" :key="index" v-for="(pb, index) in sortedCountries">
        <div class="flex flex-row justify-between w-full">
          <p class="w-full">
            {{ pb.name }} <span>(+{{ pb.dialCode }})</span>
          </p>
        </div>
      </option>
    </select>
  </label>
</template>

<script>
import allCountries from "./allCountries";
import getCountry from "./defaultCountry";

export default {
  name: "vue-country-code",
  props: {
    disabledFetchingCountry: {
      type: Boolean,
      default: true,
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: "",
    },
    preferredCountries: {
      type: Array,
      default: () => [],
    },
    onlyCountries: {
      type: Array,
      default: () => [],
    },
    ignoredCountries: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.initializeCountry();
    this.$emit("onSelect", this.activeCountry);
  },
  data() {
    return {
      activeCountry: { iso2: "" },
      selectedIndex: null,
    };
  },
  computed: {
    filteredCountries() {
      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.getCountries(this.onlyCountries);
      }

      if (this.ignoredCountries.length) {
        return allCountries.filter(
          ({ iso2 }) =>
            !this.ignoredCountries.includes(iso2.toUpperCase()) &&
            !this.ignoredCountries.includes(iso2.toLowerCase())
        );
      }

      return allCountries;
    },
    sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
      const preferredCountries = this.getCountries(this.preferredCountries).map(
        (country) => ({ ...country, preferred: true })
      );

      return [...preferredCountries, ...this.filteredCountries];
    },
  },
  methods: {
    initializeCountry() {
      /**
       * 1. Use default country if passed from parent
       */
      if (this.defaultCountry) {
        const defaultCountry = this.findCountry(this.defaultCountry);
        if (defaultCountry) {
          this.activeCountry = defaultCountry;
          return;
        }
      }
      /**
       * 2. Use the first country from preferred list (if available) or all countries list
       */
      this.activeCountry =
        this.findCountry(this.preferredCountries[0]) ||
        this.filteredCountries[0];
      /**
       * 3. Check if fetching country based on user's IP is allowed, set it as the default country
       */
      if (!this.disabledFetchingCountry) {
        getCountry().then((res) => {
          this.choose(this.findCountry(res) || this.activeCountry);
        });
      }
    },
    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries(list = []) {
      return list
        .map((countryCode) => this.findCountry(countryCode))
        .filter(Boolean);
    },
    findCountry(iso = "") {
      return allCountries.find((country) => country.iso2 === iso.toUpperCase());
    },
    getItemClass(index, iso2) {
      const highlighted = this.selectedIndex === index;
      const lastPreferred = index === this.preferredCountries.length - 1;
      const preferred = !!~this.preferredCountries
        .map((c) => c.toUpperCase())
        .indexOf(iso2);
      return {
        highlighted,
        "last-preferred": lastPreferred,
        preferred,
      };
    },
    selectionChanged() {
      // console.log(event.target.value)
      // this.activeCountry = ;
      this.$emit("onSelect", this.activeCountry);
    },
    choose(country) {
      this.activeCountry = country;
      this.$emit("onSelect", this.activeCountry);
    },
    clickedOutside() {
      // If this was caused by a programmatic trigger, allow it, then reset the manualTrigger
      if (this.manualTrigger) {
        this.manualTrigger = false;
        return;
      }
    },
    reset() {
      this.selectedIndex = this.sortedCountries
        .map((c) => c.iso2)
        .indexOf(this.activeCountry.iso2);
    },
  },
};
</script>
