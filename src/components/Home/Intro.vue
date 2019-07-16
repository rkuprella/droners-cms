<template>
  <div class="intro hero">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Wer geht in die Disco" level="2" />
        <div class="hero-content center-v">
          <div class="hero-wrapper center">
            <g-image class="hero-image" src="~/assets/img/copter.png" alt="Copter" />
          </div>
          <div class="hero-wrapper">
            <h1 class="intro-title">Lorem ispum dolor sit amet</h1>
            <p
              class="intro-text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem obcaecati harum numquam esse non saepe illum sapiente ipsum. Tempora totam alias consequuntur molestias minima officiis! Ea ipsum exercitationem aliquid.</p>
            <div class="btn-wrapper">
              <Btn title="Mehr erfahren" to="/" />
              <Btn title="Jetzt buchen" to="/" inverted color="blue" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Title from "~/components/UI/Title";
import Btn from "~/components/UI/Btn";

export default {
  components: {
    Title,
    Btn
  }
};
</script>

<style>
.intro-title {
  font-family: "Quicksand", sans-serif;
  font-size: 2.3em;
  color: var(--color-blue);
  font-weight: 700;
  margin-bottom: var(--size-md);
  text-transform: uppercase;
}
.hero-image {
  object-fit: contain;
  width: 80%;
  max-width: 300px;
  margin-bottom: var(--size-lg);
}

.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: var(--size-md) 0;
}
@media screen and (min-width: 990px) {
  .intro-title {
    font-size: 3.5em;
  }
  .intro-text {
    font-size: 1.1rem;
    line-height: 1.5em;
  }
  .hero-image {
    margin-bottom: 0;
  }
}
</style>