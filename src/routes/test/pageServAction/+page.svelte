<!-- src/routes/+page.svelte -->
<!-- <script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  export let data;
  const { form, errors } = superForm(data.form);
</script>

<form method="POST">
  <input name="firstName" bind:value={$form.firstName} />
  {#if $errors.firstName}<span>{$errors.firstName}</span>{/if}

  <input name="lastName" bind:value={$form.lastName} />
  {#if $errors.lastName}<span>{$errors.lastName}</span>{/if}

  <input name="dateOfBirth" type="date" bind:value={$form.dateOfBirth} />
  {#if $errors.dateOfBirth}<span>{$errors.dateOfBirth}</span>{/if}

  <input name="email" type="email" bind:value={$form.email} />
  {#if $errors.email}<span>{$errors.email}</span>{/if}

  <select name="role" bind:value={$form.role}>
    <option value="user">User</option>
    <option value="moderator">Moderator</option>
    <option value="admin">Admin</option>
  </select>
  {#if $errors.role}<span>{$errors.role}</span>{/if}

  <button type="submit">Submit</button>
</form> -->
<script lang="ts">
	// import type { PageLoad } from './$types';
	export let data;
	console.log('***** >>>>>>>> This is where the form would be rendered');
	console.log('data', data);
</script>

<h1>From +page.server.ts {data.user.name} ... If error {data.error}</h1>
