<script lang="ts">
  import Audio from "./Audio.svelte";

  export let audioUrl: string;
</script>

<Audio {audioUrl} control={false} loop={false} startFraction={0}/>