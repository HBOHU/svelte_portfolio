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
		padding: 3em;
		height: 240px;
		text-align: center;
		position: relative;
		margin: auto;
		margin-top: 15vh;
		width: 80%;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

		input,
		textarea.input.textarea {
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
			background: transparent;
			width: 33vw;
			padding: 1em;
			margin-bottom: 2em;
			border: none;
			border-radius: 15px;
			backdrop-filter: blur(5px);
			box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
			color: black;
			font-weight: 500;

			&:hover {
				background: rgba(255, 255, 255, 0.1);
				box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
			}
		}

		button {
			color: white;
			background-color: var(--p-main-color);
			margin-top: 10px;
			padding: 10px 40px;
			width: 150px;
			font-size: 1rem;
			border: 0px;
			border-radius: 10px;

			&:hover {
				cursor: pointer;
			}

			&:active {
				background: rgba(255, 255, 255, 0);
			}
		}

		::placeholder {
			font-weight: 400;
			color: black;
		}

		input:focus,
		textarea:focus,
		button:focus {
			outline: none;
		}
	}
</style>
