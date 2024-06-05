<script lang="ts">
  export let desktop: "vertical" | "horizontal" = "vertical";
  export let mobile: "vertical" | "horizontal" = "vertical";
  export let desktopMargin: string = "1em";
  export let mobileMargin: string = "1em";
</script>

<div
  style={`--desktopMargin: ${desktopMargin}; --mobileMargin: ${mobileMargin};`}
  class="scroll"
  class:desktopVertical={desktop === "vertical"}
  class:desktopHorizontal={desktop === "horizontal"}
  class:mobileVertical={mobile === "vertical"}
  class:mobileHorizontal={mobile === "horizontal"}
  on:scroll|stopPropagation
  on:wheel|stopPropagation
  on:touchstart|stopPropagation
>
  <div class="inner">
    <slot />
  </div>
</div>

<style>
  .scroll {
    pointer-events: initial;

    --scrollBarWidth: 0.8em;
    mask-composite: add;
  }

  .inner {
    height: fit-content;
    width: fit-content;
    box-sizing: border-box;
  }

  @media only screen and (min-width: 750px) {
    .desktopVertical {
      min-height: 0;
      max-height: 100%;

      overflow-x: hidden;
      overflow-y: auto;
      padding-right: var(--scrollBarWidth);
      margin-right: calc(var(--scrollBarWidth) * -1);

      mask: linear-gradient(
          to bottom,
          transparent,
          black var(--desktopMargin),
          black calc(100% - var(--desktopMargin)),
          transparent 100%
        ),
        linear-gradient(
          to right,
          transparent calc(100% - var(--scrollBarWidth)),
          black calc(100% - var(--scrollBarWidth))
        );
    }

    .desktopVertical .inner {
      padding-top: var(--desktopMargin);
      padding-bottom: var(--desktopMargin);
    }

    .desktopHorizontal {
      min-width: 0;
      max-width: 100%;

      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: var(--scrollBarWidth);
      margin-bottom: calc(var(--scrollBarWidth) * -1);

      mask: linear-gradient(
          to right,
          transparent,
          black var(--desktopMargin),
          black calc(100% - var(--desktopMargin)),
          transparent 100%
        ),
        linear-gradient(
          to bottom,
          transparent calc(100% - var(--scrollBarWidth)),
          black calc(100% - var(--scrollBarWidth))
        );
    }

    .desktopHorizontal .inner {
      padding-left: var(--desktopMargin);
      padding-right: var(--desktopMargin);
    }
  }

  @media only screen and (max-width: 750px) {
    .mobileVertical {
      min-height: 0;
      max-height: 100%;

      overflow-x: hidden;
      overflow-y: auto;
      padding-right: var(--scrollBarWidth);
      margin-right: calc(var(--scrollBarWidth) * -1);

      mask: linear-gradient(
          to bottom,
          transparent,
          black var(--mobileMargin),
          black calc(100% - var(--mobileMargin)),
          transparent 100%
        ),
        linear-gradient(
          to right,
          transparent calc(100% - var(--scrollBarWidth)),
          black calc(100% - var(--scrollBarWidth))
        );
    }

    .mobileVertical .inner {
      padding-top: var(--mobileMargin);
      padding-bottom: var(--mobileMargin);
    }

    .mobileHorizontal {
      min-width: 0;
      max-width: 100%;

      overflow-x: auto;
      padding-bottom: var(--scrollBarWidth);
      margin-bottom: calc(var(--scrollBarWidth) * -1);

      mask: linear-gradient(
          to right,
          transparent,
          black var(--mobileMargin),
          black calc(100% - var(--mobileMargin)),
          transparent 100%
        ),
        linear-gradient(
          to bottom,
          transparent calc(100% - var(--scrollBarWidth)),
          black calc(100% - var(--scrollBarWidth))
        );
    }

    .mobileHorizontal .inner {
      padding-left: var(--mobileMargin);
      padding-right: var(--mobileMargin);
    }
  }
</style>
