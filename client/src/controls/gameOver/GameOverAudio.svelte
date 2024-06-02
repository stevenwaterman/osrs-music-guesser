<script lang="ts">
  import type { Song } from "tunescape07-shared";
  import { gameOverRoundIndexStore } from "../../lib/stores";
  import Audio from "../shared/Audio.svelte";

  export let songs: Song[];

  $: song = songs[$gameOverRoundIndexStore];
</script>

<Audio audioUrl={song.audioUrl} controls />
