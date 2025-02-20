<script lang="ts">
	import Breadcrumbs from '../../src/Components/Layout/Breadcrumbs.svelte';
	import { breadcrumbs } from './shared.svelte';
	import '../app.css';
	import type { LayoutProps } from './$types';
	import { goto } from '$app/navigation';
	// import { previousRoute } from './shared.svelte';
	let { data, children }: LayoutProps = $props();
	// let route = $state('');
	//*******/ let route = data.route;
	//******/ addBreadcrumb(route);

	// let previousRoute = $state('');
	// previousRoute = data.post.previousRoute;

	// let { children } = $props();
	let isOpen = $state(false);
	let isServicesOpen = $state(false);
	let isContactOpen = $state(false);

	// let subMenuChanged = $state(false);

	function handleMouseOver(e: MouseEvent, href: string) {
		e.preventDefault();
		// isServicesOpen = true;
		console.log('handleMouseOver', href);
	}
	function handleClick(href: string) {
		// let clickedHREF = href + '[clicked]';
		// console.log('clickedHREF', clickedHREF);

		// goto(href);

		// goto(clickedHREF);
		console.log('layout.svelte - handleClick - href', href);

		goto(href);
	}

	function toggleMenu() {
		isOpen = !isOpen;
		console.log("isOpen's value is", isOpen);
	}
	function toggleServicesMenu() {
		isServicesOpen = !isServicesOpen;
	}
	function toggleContactMenu() {
		isContactOpen = !isContactOpen;
	}
	// function next() {
	// 	console.log('next');
	// }
	function previous() {
		// console.log('previous', 'previousRoute.previousRouteId', previousRoute.previousRouteId);
		const length = breadcrumbs.arrBreadcrumbs.length;
		if (length < 2) {
			return;
		}
		let transferRouteId = breadcrumbs.arrBreadcrumbs.slice(length - 2, length - 1)[0];
		// console.log('transferRouteId', transferRouteId);
		breadcrumbs.arrBreadcrumbs.splice(length - 2, length);

		goto(transferRouteId);
	}
</script>

<div>
	{#if breadcrumbs.arrBreadcrumbs}
		<Breadcrumbs />
	{/if}
</div>
<div>
	<button onclick={previous} style="font-size:2rem; color: green"> ←Back </button>
</div>

<h1 style="color:red">First Playground App</h1>

<!-- <button onclick={next}> Next </button> -->

<div class="page">
	<div class="menu-button-div">
		<p class="menu-text">menu</p>
		<button class="menu-toggle-button" aria-label="Toggle menu" onclick={toggleMenu} tabindex="0">
			☰
		</button>
	</div>

	<nav class={isOpen ? 'menu-toggle-open' : 'menu-toggle-closed'}>
		<ul class={isOpen ? 'menu-toggle-open' : 'menu-toggle-closed'}>
			<!-- <ul class="menu-toggle-closed"> -->
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li
				onmouseleave={() => {
					isServicesOpen = false;
				}}
				onfocus={() => {
					isServicesOpen = true;
				}}
				onmouseover={() => {
					isServicesOpen = true;
				}}
			>
				<span>Services</span>

				<ul
					class={isServicesOpen ? 'menu-services-toggle-open' : 'menu-services-toggle-closed'}
					onmouseleave={() => {
						isServicesOpen = false;
					}}
				>
					<!-- <ul class="menu-toggle-closed"> -->
					<li>
						<button
							onclick={() => handleClick('/services/air')}
							onfocus={() => {
								isServicesOpen = true;
							}}>Air Conditioning</button
						>
					</li>
					<li>
						<button
							onclick={() => handleClick('/services/plumbing')}
							onfocus={() => {
								isServicesOpen = true;
							}}>Plumbing</button
						>
					</li>
					<li>
						<button
							onclick={() => handleClick('/services/fixit')}
							onfocus={() => {
								isServicesOpen = true;
							}}>Fixit</button
						>
					</li>
				</ul>
			</li>

			<li
				onmouseleave={() => {
					isContactOpen = false;
				}}
			>
				<span
					class="menu-link"
					role="menuitem"
					tabindex="0"
					onmouseover={toggleContactMenu}
					onfocus={toggleContactMenu}>Contact</span
				>
				<ul
					class={isContactOpen ? 'menu-contact-toggle-open' : 'menu-contact-toggle-closed'}
					onmouseleave={() => {
						isContactOpen = false;
					}}
					onmouseover={(e) => {
						e.preventDefault();
						isContactOpen = true;
					}}
					onfocus={() => {
						isContactOpen = true;
					}}
				>
					<!-- <ul class="menu-toggle-closed"> -->
					<li>
						<button
							onclick={() => handleClick('/contact/email')}
							onfocus={() => {
								isContactOpen = true;
							}}>Email</button
						>
					</li>
					<li>
						<button
							onclick={() => handleClick('/contact/chat')}
							onfocus={() => {
								isContactOpen = true;
							}}>Chat</button
						>
					</li>
				</ul>
			</li>
			<li>
				<button
					onclick={() => {
						handleClick('/resetBreadcrumbs');
					}}>Reset</button
				>
			</li>
		</ul>
	</nav>
	{@render children()}
</div>

<style>
	h1 {
		color: red;
		text-align: center;
		font-size: 5rem;
	}
	h2 {
		color: blue;
		text-align: center;
		font-size: 3rem;
	}

	ul {
		list-style: none;
	}

	.page {
		margin-left: 3vw;
		margin-top: 0;
		padding-top: 0;
		border: none;
		box-sizing: border-box;
	}
	.menu-button-div {
		display: grid;
		grid-template-columns: 1vw;
		margin-top: 0;
		margin-left: 0;
		padding-top: 0;
		padding-left: 0;
	}
	.menu-text {
		font-size: 0.8rem;
		margin-left: 5px;

		/* margin-top: 0;
		margin-left: 0;
		padding-top: 0;
		padding-left: 0;*/
	}
	.menu-toggle-button {
		background-color: none;
		color: black;
		border: none;
		font-size: 3rem;
		line-height: 0.4;
		margin-bottom: 10px;
	}
	nav {
		background-color: #333;
		color: white;
		/* padding: 1rem; */
		display: flex;
		justify-content: flex-start;
		width: fit-content;
	}
	nav ul {
		width: fit-content;
		/* height: 1.6rem; */
		margin: 0;
		margin-left: 5px;
		margin-bottom: 5px;
		padding: 0;
	}
	nav li {
		margin-right: 1rem;
	}

	nav ul li {
		margin-right: 1rem;
	}

	nav ul li ul {
		margin-right: 1rem;
		margin-bottom: 0;
		/* justify-content: center;
		align-content: center; */
		text-align: center;
	}

	nav ul li ul li {
		margin-bottom: 0%;
		padding-bottom: 0%;
		width: 100%;
		transform: translateZ(0); /* Forces GPU acceleration */
		transition: transform 0.3s;
	}
	nav ul li ul li:hover {
		transform: scale(1.2);
		background-color: violet;
	}
	.item-hoverable {
		transform: translateZ(0); /* Forces GPU acceleration */
		transition: transform 0.2s;
	}

	.item-hoverable:hover {
		transform: scale(1.1);
	}

	.menu-toggle-closed {
		display: none;
	}
	.menu-toggle-open {
		display: flex;
		cursor: pointer;
		list-style: none;
		margin-top: 5px;
		gap: 1rem;
	}

	.menu-services-toggle-closed {
		display: none;
	}
	.menu-services-toggle-open {
		display: flex;
		flex-direction: column;
		cursor: pointer;
		list-style: none;
		margin-top: 5px;
		gap: 1rem;
		background-color: yellow;
		color: black;
	}

	.menu-contact-toggle-closed {
		display: none;
	}
	.menu-contact-toggle-open {
		display: flex;
		flex-direction: column;
		cursor: pointer;
		list-style: none;
		margin-top: 5px;
		gap: 1rem;
		background-color: yellow;
		color: black;
	}

	/* @media (max-width: 768px) { */
	/* 	.nav-links { */
	/* 		display: none; */
	/* 		flex-direction: column; */
	/* 	} */
	/* 	.nav-links.open { */
	/* 		display: flex; */
	/* 	} */
	/* 	.menu-toggle { */
	/* 		display: block; */
	/* 	} */
	/* } */
</style>
