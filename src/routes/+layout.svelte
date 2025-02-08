<script lang="ts">
	import Breadcrumbs from '../../src/Components/Layout/Breadcrumbs.svelte';
	import '../app.css';
	import type { LayoutProps } from './$types';
	import { goto } from '$app/navigation';
	// import { currentRoute } from './shared.svelte';
	import { previousRoute } from './shared.svelte';
	let { data, children }: LayoutProps = $props();
	let route = $state('');
	$effect(() => {
		route = data.post.route;
		console.log('route-effect', route);
	});
	// previousRoute.prevRoute = currentRoute.route;
	// currentRoute.currRoute = route;

	// let { children } = $props();
	let isOpen = $state(false);
	let isServicesOpen = $state(false);
	let isContactOpen = $state(false);

	// let subMenuChanged = $state(false);

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
		previousRoute.prevRoute = route;
		console.log('previousRoute.prevRoute', route);
		goto(previousRoute.prevRoute);
	}
</script>

<button onclick={previous}> Back </button>

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
			>
				<a
					href="/services"
					onmouseover={() => {
						isServicesOpen = true;
					}}
					onfocus={toggleServicesMenu}
					onclick={toggleServicesMenu}>Services</a
				>

				<ul
					class={isServicesOpen ? 'menu-services-toggle-open' : 'menu-services-toggle-closed'}
					onmouseleave={() => {
						isServicesOpen = false;
					}}
				>
					<!-- <ul class="menu-toggle-closed"> -->
					<li><a href="/services/air">A/C</a></li>
					<li><a href="/services/plumbing">Plumbing</a></li>
					<li><a href="/services/fixit">Contact</a></li>
				</ul>
			</li>

			<li
				onmouseleave={() => {
					isContactOpen = false;
				}}
			>
				<a
					href="/contact"
					onmouseover={toggleContactMenu}
					onfocus={toggleContactMenu}
					onclick={toggleContactMenu}>Contact</a
				>
				<ul
					class={isContactOpen ? 'menu-contact-toggle-open' : 'menu-contact-toggle-closed'}
					onmouseleave={() => {
						isContactOpen = false;
					}}
				>
					<!-- <ul class="menu-toggle-closed"> -->
					<li><a href="/contact/email">Email</a></li>
					<li><a href="/contact/chat">Chat</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<p>Before Breadcrumbs</p>
	<Breadcrumbs {route} action={'add'} />
	<p>After Breadcrumbs</p>

	<h2>{data.post.title}</h2>

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
		/* margin-top: 0;
		margin-left: 0;
		padding-top: 0;
		padding-left: 0;
÷		display: inline-block; */
	}
	/* .page p {
		font-size: 12px;
		padding-left: 1vw;
		padding-left: 0;
		padding-bottom: 0;
		margin-bottom: 0;
		border: none;
		box-sizing: border-box;
		display: inline-block;
	} */
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
		/* margin-left: 1rem; */
		margin-bottom: 0%;
		padding-bottom: 0%;
		width: 100%;
	}
	nav ul li ul li:hover {
		background-color: rgb(165, 238, 184);
		color: black;
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
