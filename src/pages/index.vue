<template>
  <div>
    <header-section />
    <quote-section />
    <title-sponsor-section />
    <speaker-section />
    <important-dates-section />
    <discover-section />
    <past-section />
    <sponsor-section />
    <interest-section />
  </div>
</template>

<script>
import DiscoverSection from '../components/DiscoverSection'
import HeaderSection from '../components/HeaderSection'
import ImportantDatesSection from '../components/ImportantDatesSection'
import InterestSection from '../components/InterestSection'
import PastSection from '../components/PastSection'
import QuoteSection from '../components/QuoteSection'
import SpeakerSection from '../components/SpeakerSection'
import SponsorSection from '../components/SponsorSection'
import TitleSponsorSection from '../components/TitleSponsorSection'

export default {
  components: {
    DiscoverSection,
    HeaderSection,
    ImportantDatesSection,
    InterestSection,
    PastSection,
    QuoteSection,
    SpeakerSection,
    SponsorSection,
    TitleSponsorSection
  }
}
</script>
