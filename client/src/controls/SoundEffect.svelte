<script lang="ts">
  import Audio from "./Audio.svelte";

  export let audioUrl: string;
  export let loop: boolean = false;
</script>

<Audio {audioUrl} control={false} {loop} startFraction={0} />
