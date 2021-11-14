import { html } from "@prostory/edelweiss";

export const SubscriptionBlock = html`
	<section class="bg-white">
		<div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
			<div
				class="
						py-10
						px-6
						bg-indigo
						rounded-3xl
						sm:py-16 sm:px-12
						lg:p-20 lg:flex lg:items-center
					"
			>
				<div class="lg:w-0 lg:flex-1">
					<h2 class="text-3xl font-extrabold tracking-tight text-white">
						Subscribe to the newsletter
					</h2>
					<p class="mt-4 max-w-3xl text-lg text-indigo-100">
						Frontend links delivered to your inbox every week. No spam,
						unsubscribe at anytime.
					</p>
				</div>
				<div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
					<form class="sm:flex">
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							name="email-address"
							type="email"
							autocomplete="email"
							required
							class="
									w-full
									border-white
									px-5
									py-3
									placeholder-gray-500
									focus:outline-none
									focus:ring-2
									focus:ring-offset-2
									focus:ring-offset-indigo-700
									focus:ring-white
									rounded-md
								"
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							class="
									mt-3
									w-full
									flex
									items-center
									justify-center
									px-5
									py-3
									border border-transparent
									text-base
									font-medium
									rounded-md
									text-white
									bg-indigo-500
									hover:bg-indigo-400
									focus:outline-none
									focus:ring-2
									focus:ring-offset-2
									focus:ring-offset-indigo-700
									focus:ring-white
									sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0
								"
						>
							Notify me
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
`;
