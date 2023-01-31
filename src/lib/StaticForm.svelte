<div class="columns">
	<form action="https://api.staticforms.xyz/submit" method="post" id="staticform">
		<input type="hidden" name="accessKey" value="1cbbec6d-4489-4369-9fac-e88df9c5ff36" />
		<input type="hidden" name="subject" value="From portfolio website" />
		<input type="hidden" name="redirectTo" value="https://stijn.work" />

		<div class="field">
			<label class="label"
				>Name
				<div class="control">
					<input class="input" type="text" name="name" placeholder="Enter Your Name" required />
				</div></label
			>
		</div>

		<div class="field">
			<label class="label"
				>Email
				<div class="control">
					<input class="input" type="email" name="email" placeholder="Enter Your Email" required />
				</div></label
			>
		</div>

		<div class="field">
			<label class="label"
				>Message
				<div class="control">
					<textarea
						class="input textarea"
						name="message"
						placeholder="Enter Your Message"
						required
					/>
				</div></label
			>
		</div>

		<button class="button is-primary" type="submit">Submit</button>
	</form>
</div>

<style lang="scss">
	form {
		text-align: center;
		position: relative;
		margin: auto;
		margin-top: 50px;
		width: 100%;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-size: 1.6em;
		::placeholder {
			color: black;
		}
	}

	form input,
	form textarea.input.textarea {
		text-align: center;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		background: transparent;
		width: 240px;
		padding: 1em;
		margin-bottom: 2em;
		border: none;
		border-radius: 15px;
		backdrop-filter: blur(10px);
		box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
		font-size: 0.8em;

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
		}

		&:focus-visible {
			outline: none;
		}
	}

	form button {
		text-align: center;
		position: relative;
		color: white;
		background-color: var(--menu-background);
		border-radius: 50px;
		padding: 20px 90px;
		font-size: 0.8em;
		border: 0px;
		margin-bottom: 40px;
	}
	label {
		text-align: center;
	}
	@media only screen and (min-width: 650px) {
		form {
			padding-top: 10vh;
		}
		form input,
		form textarea.input.textarea {
			width: 70vw;
			max-width: 500px;
		}
	}
</style>
