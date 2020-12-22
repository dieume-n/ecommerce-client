<template>
	<div>
		<Navigation />
		<Nuxt />
	</div>
</template>
<script>
// import Navigation from "@layout/partials/Navigation";
import Navigation from "./partials/Navigation";
export default {
	components: {
		Navigation,
	},
};
</script>
<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
</style>
