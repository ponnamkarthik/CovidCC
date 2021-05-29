<template>
  <div
    class="
      bg-background2
      w-full
      mx-auto
      rounded-md
      mt-8
      z-10
      pb-8
      pt-4
      px-8
      items-start
    "
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"
    >
      <trust-item-component>
        <template v-slot:image>
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.4529 14.4448L27.9765 12.5743L22.3992 0.909915C22.2469 0.590552 21.9963 0.33202 21.6867 0.174873C20.9103 -0.22053 19.9669 0.108972 19.5787 0.909915L14.0014 12.5743L1.52503 14.4448C1.18106 14.4955 0.866572 14.6628 0.625792 14.9163C0.334701 15.2249 0.174297 15.6402 0.179826 16.0708C0.185354 16.5014 0.356363 16.9121 0.655275 17.2127L9.68209 26.2917L7.54946 39.1118C7.49945 39.4101 7.53144 39.7168 7.6418 39.9972C7.75217 40.2776 7.93649 40.5205 8.17386 40.6984C8.41124 40.8763 8.69217 40.9819 8.98481 41.0035C9.27744 41.025 9.57007 40.9615 9.82951 40.8202L20.9889 34.7675L32.1484 40.8202C32.4531 40.9875 32.8069 41.0432 33.1459 40.9824C34.0009 40.8303 34.5759 39.9939 34.4284 39.1118L32.2958 26.2917L41.3226 17.2127C41.5683 16.9643 41.7305 16.6398 41.7796 16.285C41.9123 15.3979 41.3128 14.5766 40.4529 14.4448V14.4448Z"
              fill="#006FBA"
            />
          </svg>
        </template>
        <template v-slot:title>
          <h1>E-Aufladen Trust</h1>
        </template>
        <template v-slot:description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            turpis elementum sed eu sodales augue orci. Ut nisl sed et pharetra
            integer.
          </p>
        </template>
      </trust-item-component>
      <trust-item-component>
        <template v-slot:image>
          <svg
            width="35"
            height="45"
            viewBox="0 0 35 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.7025 5.64565L17.951 0.107992C17.761 0.0410429 17.506 0.00756836 17.251 0.00756836C16.9961 0.00756836 16.7411 0.0410429 16.5511 0.107992L0.799574 5.64565C0.414825 5.77955 0.0996094 6.23863 0.0996094 6.65945V29.7283C0.0996094 30.1491 0.363834 30.7038 0.683686 30.9668L16.6623 43.8115C16.8246 43.9406 17.0332 44.0076 17.2464 44.0076C17.4596 44.0076 17.6729 43.9406 17.8305 43.8115L33.8091 30.9668C34.129 30.7086 34.3932 30.1539 34.3932 29.7283V6.65945C34.4025 6.23863 34.0873 5.78433 33.7025 5.64565V5.64565ZM25.7109 13.8135L15.8558 27.8106C15.7865 27.9085 15.6958 27.988 15.5911 28.0429C15.4864 28.0978 15.3706 28.1264 15.2531 28.1264C15.1357 28.1264 15.0199 28.0978 14.9152 28.0429C14.8105 27.988 14.7198 27.9085 14.6505 27.8106L8.79121 19.4898C8.61506 19.2363 8.79121 18.8825 9.09252 18.8825H11.6513C11.8877 18.8825 12.1149 19.002 12.254 19.1981L15.2531 23.4541L22.2481 13.517C22.3872 13.3209 22.6097 13.2014 22.8508 13.2014H25.4096C25.7109 13.2061 25.887 13.56 25.7109 13.8135V13.8135Z"
              fill="#006FBA"
            />
          </svg>
        </template>
        <template v-slot:title>
          <h1>100% Safety</h1>
        </template>
        <template v-slot:description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            turpis elementum sed eu sodales augue orci. Ut nisl sed et pharetra
            integer.
          </p>
        </template>
      </trust-item-component>
      <trust-item-component>
        <template v-slot:image>
          <svg
            width="41"
            height="39"
            viewBox="0 0 41 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.3742 3.63449C36.269 2.48628 34.9547 1.57475 33.5068 0.952312C32.059 0.329876 30.5061 0.00880823 28.9376 0.00756836C25.9707 0.00806868 23.1121 1.15783 20.9279 3.2292C18.7439 1.15748 15.8852 0.00766462 12.9182 0.00756836C11.3478 0.00925507 9.79326 0.331302 8.34398 0.955177C6.89471 1.57905 5.57933 2.49243 4.47356 3.64276C-0.242856 8.52898 -0.240852 16.1716 4.47757 21.0371L20.9279 38.0076L37.3782 21.0371C42.0966 16.1716 42.0986 8.52898 37.3742 3.63449V3.63449Z"
              fill="#006FBA"
            />
          </svg>
        </template>
        <template v-slot:title>
          <h1>Our Promise</h1>
        </template>
        <template v-slot:description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            turpis elementum sed eu sodales augue orci. Ut nisl sed et pharetra
            integer.
          </p>
        </template>
      </trust-item-component>
    </div>
  </div>
</template>

<script>
import TrustItemComponent from "@/components/home/TrustItemComponent";
export default {
  name: "TrustComponent",
  components: { TrustItemComponent },
};
</script>

<style scoped></style>
