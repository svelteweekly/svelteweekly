<script>
  import successkid from "images/successkid.jpg";
</script>

<style>
  h1,
  .subscribe,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>A community-driven weekly newsletter about Svelte</title>
</svelte:head>

<h1>Welcome to the weekly newsletter about Svelte!</h1>

<p>Subscribe to our mailing list to get the summary about Svelte every week.</p>

<div class="subscribe">
  <form action="">
    <input type="text" name="email" />
    <button type="submit">Subscribe</button>
  </form>
</div>
