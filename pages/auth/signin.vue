<template>
	<div class="section">
		<div class="container is-fluid">
			<div class="columns is-centered">
				<div class="column is-6">
					<h1 class="title is-4">Sign in</h1>
					<form action="" @submit.prevent="signin">
						<div class="field">
							<label for="email" class="label">Email</label>
							<div class="control">
								<input
									type="email"
									name="email"
									id="email"
									class="input"
									placeholder="e.g. john@example.com"
									v-model="form.email"
								/>
							</div>
						</div>
						<div class="field">
							<label for="password" class="label">Password</label>
							<div class="control">
								<input
									type="password"
									name="password"
									id="password"
									class="input"
									v-model="form.password"
								/>
							</div>
						</div>
						<div class="field">
							<p class="control">
								<button class="button is-info is-medium">
									Sign in
								</button>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			form: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		async signin() {
			await this.$auth.loginWith("laravelJWT", {
				data: this.form,
			});
		},
	},
};
</script>
