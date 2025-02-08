<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Chat</h1>

<h1>{data.post.title}</h1>
