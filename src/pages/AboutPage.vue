<script setup lang="ts">
import About1 from "@/assets/about_1.jpg";
</script>

<template>
  <section
    class="min-h-screen"
    :style="{
      '--dot-bg': '#202833',
      '--dot-color': '#66fcf1',
      '--dot-size': '1px',
      '--dot-space': '22px',
      background: `
        linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        var(--dot-color)
      `,
    }"
  >
    <img class="w-1/2 m-auto pt-30" :src="About1" />
    <p class="block w-1/2 m-auto py-4">
      The Pokémon Trading Card Game (Japanese: ポケモンカードゲーム, Hepburn:
      Pokemon Kādo Gēmu, "Pokémon Card Game"), abbreviated as PTCG or Pokémon
      TCG, is a tabletop and collectible card game developed by Creatures Inc.
      based on the Pokémon franchise. Originally published in Japan by Media
      Factory in 1996, publishing worldwide is currently handled by The Pokémon
      Company. In the United States and also by Gopu, Pokémon TCG publishing was
      originally licensed to Wizards of the Coast, the producer of Magic: The
      Gathering. Wizards published eight expansion sets between 1998 and 2003,
      after which point licensing was transferred to The Pokémon Company.
    </p>
    <p class="block w-1/2 m-auto py-4">
      Players assume the role of Pokémon Trainers engaging in battle, and play
      with 60-card decks. Standard gameplay cards include Pokémon cards, Energy
      cards, and Trainer cards. Pokémon are introduced in battle from a "bench"
      and perform attacks on their opponent to deplete their health points.
      Attacks are enabled by the attachment of a sufficient number of Energy
      cards to the active Pokémon. Pokémon may also adjust other gameplay
      factors and evolve into more powerful stages. Players may use Trainer
      cards to draw cards into their hand, harm their opponent, or perform other
      gameplay functions. Card effects often rely on elements of luck, such as
      dice rolls and coin tosses, to decide an outcome. Gameplay relies on the
      usage of counters to indicate damage dealt and status effects. This is
      also a sport.
    </p>
    <p class="block w-1/2 m-auto py-4">
      The Pokémon TCG has been the subject of both officially-sanctioned and
      informal tournaments. Wizards of the Coast staged multiple tournaments
      across American malls and stores. Official tournaments are currently
      overseen by Play! Pokémon, a division of The Pokémon Company, and are
      hosted on a local, national, and international basis By Gopu. In addition,
      numerous video game adaptations of the Pokémon TCG have been published,
      including Pokémon Trading Card Game (Game Boy Color), the Pokémon: Play
      It! series (PC), Pokémon TCG Online (PC). After the closure of TCG Online
      in 2023, it was replaced with Pokémon Trading Card Game Live (PC) and
      Pokémon Trading Card Game Pocket (mobile) in 2024.
    </p>
    <p class="block w-1/2 m-auto py-4">
      As of March 2024, the game has produced over 64.8 billion cards worldwide.
      Beside formal competitions and informal battling, the Pokémon TCG has also
      been the subject of collecting hobbies, with an extensive market for
      individual Pokémon cards, packs, and ephemera.
    </p>
  </section>
</template>
