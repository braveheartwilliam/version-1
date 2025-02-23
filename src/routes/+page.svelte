<script lang="ts">
	import type { PageProps } from '../$types';
import { goto } from '$app/navigation';
	let { data }: PageProps = $props();
goto('/home');
</script>

