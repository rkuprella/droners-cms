<template>
  <div class="intro hero">
    <div class="container center-v">
      <section class="hero-section">
        <Title headline="Wer geht in die Disco" />
        <div class="hero-content center-v">
          <div class="hero-wrapper center">
            <g-image class="hero-image" src="~/assets/img/copter.png" alt="Copter" />
          </div>
          <div class="hero-wrapper">
            <h1>Leid und Frieden</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem obcaecati harum numquam esse non saepe illum sapiente ipsum. Tempora totam alias consequuntur molestias minima officiis! Ea ipsum exercitationem aliquid.</p>
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
.intro {
  /* background: url("../../assets/img/bg-intro.jpg") 50% 50% no-repeat / cover; */
  background: var(--color-bg-dark);
}
.hero-content h1 {
  font-family: "Quicksand", sans-serif;
  font-size: 3.5em;
  color: var(--color-blue);
  font-weight: 700;
  margin-bottom: var(--size-md);
  text-transform: uppercase;
}
.hero-image {
  object-fit: contain;
  width: 80%;
  max-width: 400px;
}
.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: var(--size-md) 0;
}
</style>