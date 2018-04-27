<template>
  <div>
    <div class="bg-ac-main pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1">
            <div class="d-flex flex-column px-4 py-3 bg-color-black-alpha-80 text-white">
              <div class="mt-2 mb-3 pb-3 border-bottom border-light text-center">
                <span class="lead">Join the world's most inspired gathering of Agile Leaders at AgileCamp 2018</span>
              </div>

              <a class="d-flex flex-row my-2 h2" href="https://www.eventbrite.com/e/agile-agilecamp-northwest-2018-registration-43714048897" target="_blank">
                <img class="img-red-star mx-2" src="~assets/images/red-star.png" />
                <span class="col-6 text-uppercase">North<wbr />west/<wbr />Portland</span>
                <span>Sep 14</span>
              </a>

              <a class="d-flex flex-row my-2 h2" href="https://www.eventbrite.com/e/agile-agilecamp-new-york-metro-2018-registration-43797783349" target="_blank">
                <img class="img-red-star mx-2" src="~assets/images/red-star.png" />
                <span class="col-6 text-uppercase">New York Metro Area</span>
                <span>Sep 24</span>
              </a>

              <a class="d-flex flex-row my-2 h2" href="https://www.eventbrite.com/e/agile-agilecamp-dallas-2018-registration-43798159474" target="_blank">
                <img class="img-red-star mx-2" src="~assets/images/red-star.png" />
                <span class="col-6 text-uppercase">Dallas–Fort Worth</span>
                <span>Nov 2</span>
              </a>

              <a class="d-flex flex-row my-2 h2" href="https://www.eventbrite.com/e/agile-agilecamp-san-francisco-bay-area-2018-registration-43798886649" target="_blank">
                <img class="img-red-star mx-2" src="~assets/images/red-star.png" />
                <span class="col-6 text-uppercase">San Francisco Bay Area</span>
                <span>Nov 30</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- <img class="logo-main" src="~assets/images/AgileCamp_2018_White_970x160.png" /> -->
      <!-- <span class="h4 font-weight-light text-nowrap text-white mb-4" style="margin-left: 74px; word-spacing: 0.25em;">Learn | Play | Network</span> -->
    </div>

    <div class="bg-gradient-gray">
      <section class="container">
        <div class="row" style="min-height: 10rem;">
          <div class="col-12 d-flex flex-column justify-content-center align-items-center text-center">
            <!-- TODO: Move to quote machine component -->
            <transition name="fade" mode="out-in">
              <div v-if="quoteIndex === 0" key="quote0">
                <blockquote class="blockquote font-size-150 text-center">“We brought 20 team members from Toyota Connected... it’s a great opportunity for them to learn from others.”</blockquote>
                <footer class="blockquote-footer text-right">Nigel Thurlow, Chief of Agile - Toyota Connected</footer>
              </div>

              <div v-if="quoteIndex === 1" key="quote1">
                <blockquote class="blockquote font-size-150 text-center">“What makes this conference more unique than others? It’s an opportunity for deep learning.”</blockquote>
                <footer class="blockquote-footer text-right">Mamie Jones, SVP - Intuit</footer>
              </div>

              <div v-if="quoteIndex === 2" key="quote2">
                <blockquote class="blockquote font-size-150 text-center">“The quality at AgileCamp is extremely high. If you look at the speakers, the keynotes, these are top level people.”</blockquote>
                <footer class="blockquote-footer text-right">Jorgen H., Attendee</footer>
              </div>
            </transition>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-main-blur">
      <section class="container py-4" id="sponsorSection">
        <div class="row py-4">
          <div class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white">
            <h2>Become an AgileCamp Sponsor</h2>

            <p class="body-copy">
              AgileCamp can’t happen without our sponsors.
              To find out more about current sponsorship opportunities like exhibition booths, branded communications and custom engagements, please download our <a target="_blank" :href="sponsorResLink">Sponsorship Program</a> guide.
            </p>

            <p class="body-copy">
              AgileCamp attracts industry leading professionals and the next generation of leaders, making it the perfect place to promote your company or product!
            </p>
          </div>

          <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <p class="text-center">
              <a class="btn btn-primary px-4 mx-1 my-1" target="_blank" :href="sponsorResLink">2018 sponsorship program</a>
              <a class="btn btn-info px-4 mx-1 my-1" :href="emailLink" @click="trackContact(emailLink, 'sponsorResources')">Contact us with questions</a>
            </p>
          </div>
        </div>

        <div class="row pt-4 border-top border-light">
          <div class="col-12 text-white">
            <h4>2018 AgileCamp Sponsors</h4>
          </div>
        </div>

        <div class="row pb-2">
          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://nike.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-nike-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.prudential.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-prudential-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://hyperdriveagile.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-hyperdrive-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.capitalone.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-capitalone-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.ca.com/us.html" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-catechnologies-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://agilecraft.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-agilecraft-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://improving.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-improving-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.infoq.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-infoq-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://agilityhealthradar.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-agilityhealth-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.axelos.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-axelos-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.intuit.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-intuit-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://propellerconsulting.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-propeller-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.versionone.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-versionone-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.daugherty.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-teamdaugherty-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://www.thei4group.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-i4group-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://www.brattoninc.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-bratton-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://icagile.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-ica-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://www.eliassen.com/agile/" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-eliassengroup-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://disciplinedagileconsortium.org" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-dac-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.scrumalliance.org" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-scrumalliance-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.digite.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-digite-white.png" /></a>
          </div>

          <div class="col-12 col-md-6 col-lg-4 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.northeastern.edu/graduate/" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-nupjm-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://www.casthighlight.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-casthighlight-white.png" /></a>
          </div>
<!--
          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://monarchagile.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-monarch-white.png" /></a>
          </div>

          <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://scottambler.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-scottambler-white.png" /></a>
          </div>
 -->
        </div>
      </section>
    </div>

<!--
    <div class="bg-color-gray-lt-2">
      <div class="container">
        <div class="row">
          <div class="col-12 font-weight-bold text-center text-uppercase text-white px-2 py-2">
            Last Year’s Lineup
          </div>
        </div>
      </div>
    </div>

    <div class="bg-ac-lineup border-bottom-yellow">
      <section class="container">
        <div class="row px-2 py-2">
          <div class="col-12 py-2">
            <router-link class="color-green" to="northwest">
              <h1 class="display-2 text-uppercase font-family-oswald-400"><span class="bg-dark text-white small rotate-ccw-10 p-2" style="opacity: .9; position: absolute; left: 2em; font-size: 30%;">SOLD OUT</span> Northwest</h1>
              <h2 class="font-weight-bold ml-1">September 6th, 2017</h2>
            </router-link>
          </div>

          <div class="col-12 py-2">
            <router-link class="color-purple" to="new-york-metro">
              <h1 class="display-2 text-uppercase font-family-oswald-400"><span class="bg-dark text-white small rotate-ccw-10 p-2" style="opacity: .9; position: absolute; left: 2em; font-size: 30%;">SOLD OUT</span> New York Metro</h1>
              <h2 class="font-weight-bold ml-1">September 25th, 2017</h2>
            </router-link>
          </div>

          <div class="col-12 py-2">
            <router-link class="color-orange" to="silicon-valley">
              <h1 class="display-2 text-uppercase font-family-oswald-400">Silicon Valley</h1>
              <h2 class="font-weight-bold ml-1">November 6th, 2017</h2>
            </router-link>
          </div>

          <div class="col-12 py-2">
            <router-link class="color-indigo" to="dallas">
              <h1 class="display-2 text-uppercase font-family-oswald-400">Dallas</h1>
              <h2 class="font-weight-bold ml-1">December 1st, 2017</h2>
            </router-link>
          </div>
        </div>
      </section>
    </div>
 -->

    <div>
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-xl-6 d-flex flex-column justify-content-center align-items-center">
            <img src="~assets/images/practitioners.jpg" class="img-fluid img-practitioners mb-4 mb-xl-0" />
          </div>

          <div class="col-12 col-xl-6 d-flex flex-column justify-content-center align-items-center text-center">
            <div class="text-center">
              <h2>Agile and Lean practitioners of all levels have something to learn at AgileCamp</h2>

              <div class="card-deck mt-4">
                <div class="card bg-transparent">
                  <div class="card-body">
                    <h4 class="card-title text-success">Novices</h4>
                    <p class="card-text">Learn the basics of Agile and Lean</p>
                  </div>
                </div>

                <div class="card bg-transparent">
                  <div class="card-body">
                    <h4 class="card-title text-success">Experts</h4>
                    <p class="card-text">Become a better leader and Agile coach</p>
                  </div>
                </div>
              </div>

              <div class="card-deck mt-0 mt-sm-4">
                <div class="card bg-transparent">
                  <div class="card-body">
                    <h4 class="card-title text-success">Practitioners</h4>
                    <p class="card-text">Learn new Agile skills, tools and techniques</p>
                  </div>
                </div>

                <div class="card bg-transparent">
                  <div class="card-body">
                    <h4 class="card-title text-success">Executives</h4>
                    <p class="card-text">Develop an Agile company strategy and culture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-main-blur">
      <section class="container py-4">
        <div class="row py-4">
          <div class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white">
            <h2>Discover AgileCamp, the industry’s leading Agile and Lean Practices conference!</h2>

            <p class="body-copy">
              AgileCamps take place across the country, bringing together professionals from the Agile community for a day of exciting education, activities and networking.
              Presentations are led by Agile experts and touch on the newest tools and Agile methodologies.
              Activities are exciting workshops that put techniques to the test and advance professional skills.
              While receptions and breaks bring the Agile community together for a valuable opportunity to network with industry leading professionals.
            </p>
          </div>

          <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <img src="~assets/images/discover-2.jpg" class="img-fluid img-discover d-none d-lg-block" />
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 py-2 text-center">
            <h1>Past Keynotes</h1>
            <p class="body-copy">
              To give you an idea about our conferences, in years past, our world-class speakers have included:
            </p>
          </div>
        </div>

        <div class="row py-2">
          <div class="col-12 col-md-4 py-sm-2" v-for="keynote in shownKeynotes">
            <you-tube-card :video-id="keynote.videoId" :title="keynote.title" :key="keynote.videoId" v-if="keynote.videoId" />

            <!-- Faux video card -->
            <div class="card text-white" v-else>
              <div class="embed-responsive embed-responsive-16by9 bg-color-black text-center">
                <div class="card-block embed-responsive-item d-flex flex-column justify-content-center align-items-center text-center">
                  <p class="card-text small">{{ keynote.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="hasMoreKeynotes">
          <div class="col-12 py-2 text-center">
            <button type="button" class="btn btn-lg btn-secondary" @click="showAllKeynotes">Show All</button>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-main-blur">
      <section class="container py-4" id="speakerSection">
        <div class="row py-4">
          <div class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white">
            <h2>Accepting 2018 Speaker Submissions</h2>

            <p class="body-copy">
              Speaking at AgileCamp is a great way to contribute and make an impact on the Agile and Lean community!
              Let us know how you’re shaping the future of Agile tools and methodologies and share your message.
              Talks range on a variety of topics, and for a better idea, check out examples of past keynotes below.
            </p>

            <p class="body-copy">
              <a class="text-white" target="_blank" :href="speakerResLink">Submit your application now!</a>
            </p>

            <p class="">
              <a class="btn btn-info px-4 mx-1 my-1" :href="emailLink" @click="trackContact(emailLink, 'speakerResources')">Contact us with questions</a>
              <a class="btn btn-primary px-4 mx-1 my-1" target="_blank" :href="speakerResLink">2018 speaker application</a>
            </p>
          </div>

          <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <img src="~assets/images/speaker-1.jpg" class="img-fluid img-discover d-none d-lg-block" />
          </div>
        </div>
      </section>
    </div>

    <div class="bg-gradient-gray">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <table class="table table-responsive">
              <thead>
                <tr>
                  <th scope="col" class="h3 align-bottom" colspan="2">Important Dates</th>
                  <th scope="col" class="h5 align-bottom">Submissions Due</th>
                  <th scope="col" class="h5 align-bottom">Acceptance Notifications</th>
                  <th scope="col" class="h5 align-bottom">Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle" style="width: 1%;"><img class="img-red-star" src="~assets/images/red-star.png" /></td>
                  <td class="h5 align-middle font-weight-normal text-uppercase">Northwest/<wbr />Portland</td>
                  <td class="h5 align-middle font-weight-normal">Jun 1</td>
                  <td class="h5 align-middle font-weight-normal">Jul 1</td>
                  <td class="h5 align-middle font-weight-normal">Sep 14</td>
                </tr>
                <tr>
                  <td class="align-middle"><img class="img-red-star" src="~assets/images/red-star.png" /></td>
                  <td class="h5 align-middle font-weight-normal text-uppercase">New York Metro Area</td>
                  <td class="h5 align-middle font-weight-normal">Jun 1</td>
                  <td class="h5 align-middle font-weight-normal">Jul 1</td>
                  <td class="h5 align-middle font-weight-normal">Sep 24</td>
                </tr>
                <tr>
                  <td class="align-middle"><img class="img-red-star" src="~assets/images/red-star.png" /></td>
                  <td class="h5 align-middle font-weight-normal text-uppercase">Dallas–Fort Worth</td>
                  <td class="h5 align-middle font-weight-normal">Aug 1</td>
                  <td class="h5 align-middle font-weight-normal">Sep 1</td>
                  <td class="h5 align-middle font-weight-normal">Nov 2</td>
                </tr>
                <tr>
                  <td class="align-middle"><img class="img-red-star" src="~assets/images/red-star.png" /></td>
                  <td class="h5 align-middle font-weight-normal text-uppercase">San Francisco Bay Area</td>
                  <td class="h5 align-middle font-weight-normal">Aug 1</td>
                  <td class="h5 align-middle font-weight-normal">Sep 1</td>
                  <td class="h5 align-middle font-weight-normal">Nov 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-yellow">
      <section class="container">
        <div class="row">
          <transition name="fade" mode="out-in">
            <div class="col-12 col-sm-10 offset-sm-1 py-2 py-4" v-if="didSubmitInterest" key="didSubmitInterest">
              <strong>Thank you for sharing.</strong> We look forward to seeing you at AgileCamp 2018!
            </div>

            <div class="col-12 col-sm-10 offset-sm-1 py-2 py-4" v-else>
              <label for="interestEmail" class="lead">We’re currently planning AgileCamp 2018. Stay in touch with us!</label>
<!--

              <div class="form-group row">
                <div class="col-12">
                </div>

                <div class="col-12 col-md-6">
                  <input class="form-control form-control-danger" :class="interestEmailError ? 'is-invalid' : ''"
                    type="email" id="interestEmail" placeholder="Email address"
                    v-model="interestEmail" @keyup.enter="submitInterest">
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-text text-danger" v-if="interestEmailError">{{ interestEmailError }}</div>
                  <div class="form-text text-muted" v-else>We’ll never share this.</div>
                </div>
              </div>
 -->
              <fieldset class="form-group ml-4">
<!--
                <div class="form-check col-12">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.dates" true-value="yes" false-value="no" />
                    Notify me of the dates
                  </label>
                </div>

                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.speaker" true-value="yes" false-value="no" />
                    I’m interested in speaker registration
                  </label>
                </div>
 -->
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.opportunities" true-value="yes" false-value="no" />
                    I’m interested in sponsorship/partnership opportunities
                  </label>
                </div>

                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.city" true-value="yes" false-value="no" />
                    I want AgileCamp in my city
                  </label>
                </div>

                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.volunteer" true-value="yes" false-value="no" />
                    I want to volunteer
                  </label>
                </div>
              </fieldset>

              <div class="form-group row">
                <div class="col-12">
                  <input class="form-control form-control-danger" :class="interestEmailError ? 'is-invalid' : ''"
                    type="email" id="interestEmail" placeholder="Email address"
                    v-model="interestEmail" @keyup.enter="submitInterest">
                </div>
                <div class="col-12">
                  <div class="form-text text-danger" v-if="interestEmailError">{{ interestEmailError }}</div>
                  <div class="form-text text-muted" v-else>We’ll never share this.</div>
                </div>
              </div>

              <button type="button" class="btn btn-primary btn-sm px-4" @click="submitInterest">Submit</button>
            </div>
          </transition>
        </div>
      </section>
    </div>

<!--
    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 py-2 text-center">
            <h1>AgileCamp 2016</h1>
            <p class="body-copy">
              Want to learn more about the types of talks and activities that take place at AgileCamp?
              Check out the 2016 schedules and speaker lineups.
            </p>
          </div>

          <div class="col-12 py-2">
            <h1 class="display-4 text-center text-uppercase font-family-oswald-400">
              <a href="https://agilecampnewyorkmetro2016.sched.com" target="_blank" class="text-gray-dark">New York Metro</a> /
              <a href="https://agilecampsiliconvalley2016.sched.com" target="_blank" class="text-gray-dark">Silicon Valley</a> /
              <a href="https://agilecampdallas2016.sched.com" target="_blank" class="text-gray-dark">Dallas</a>
            </h1>
          </div>

          <div class="col-12 col-md-10 offset-md-1 py-2">
            <div class="card-group my-4">
              <you-tube-card video-id="zmxeoq5kOMw" />
              <you-tube-card video-id="v72vqLSDF6s" />
            </div>
          </div>
        </div>
      </section>
    </div>
 -->

  </div>
</template>

<script>
import random from 'lodash/random'
import YouTubeCard from '../components/YouTubeCard'

const MAX_QUOTE_INDEX = 2

export default {
  components: {
    YouTubeCard
  },

  data () {
    return {
      didSubmitInterest: false,

      interestEmail: '',
      interestEmailError: null,
      interestOpts: {
        city: 'no',
        dates: 'yes',
        opportunities: 'no',
        speaker: 'no',
        volunteer: 'no'
      },

      quoteIndex: random(0, MAX_QUOTE_INDEX),

      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,
      twitterLink: process.env.twitterLink,

      // Resource links
      speakerResLink: 'https://goo.gl/forms/9RieyAgmdrMU6fzX2',
      sponsorResLink: 'https://drive.google.com/file/d/1ErqD6KCYEhwcQRqi3tmySkpdlVQoFeoT/view',

      // Keynotes
      keynotesToShow: 3,
      keynotes: [
        {videoId: '4dUbvQ3Dl1E', title: 'David Marquet, bestselling author of Turn the Ship Around, Captain (ret) of the USS Sante Fe'},
        {videoId: 'o9lpvMU-e38', title: 'Mamie Jones, SVP at Intuit'},
        {videoId: 'gDwAbMo5wpI', title: 'Mark Randall, VP of Creativity at Adobe'},
        {videoId: '', title: 'Ken Rubin, author of Essential Scrum'},
        {videoId: 'wjU94YKKu1k', title: 'Rich Sheridan, author of Joy, Inc. and founder of Menlo Innovations'},
        {videoId: '', title: 'James Baresse, CTO at PayPal'},
        {videoId: '', title: 'Mark Cauwels, CTO at Capital One'},
        // {videoId: '', title: 'Souvik Das, CIO at Capital One'},
        {videoId: '4aWcchmMCE0', title: 'Luke Hohmann, author of Innovation Games'},
        {videoId: 'W0BDr1jHZ18', title: 'David Anderson, author of Kanban'},
        {videoId: 'v2ODRdh43sQ', title: 'Jeff Sutherland, Co-creator of Scrum'},
        {videoId: '6nmvB8khVyo', title: 'Jeff Gothelf, author of Sense & Respond and Lean UX'},
        {videoId: '8lDisTuLYMo', title: 'Jurgen Appelo, author of Management 3.0'}
      ]
    }
  },

  mounted () {
    this.startQuoteTimer()
  },

  beforeDestroy () {
    if (this.quoteTid) clearTimeout(this.quoteTid)
  },

  computed: {
    hasMoreKeynotes () {
      return this.keynotes.length > this.keynotesToShow
    },
    shownKeynotes () {
      return this.keynotes.slice(0, this.keynotesToShow)
    }
  },

  methods: {
    showAllKeynotes () {
      this.keynotesToShow = this.keynotes.length

      this.$root.$options.$tracker.trackAction('show_all_keynotes')
    },

    startQuoteTimer () {
      this.quoteTid = setTimeout(() => {
        this.quoteIndex = random(0, MAX_QUOTE_INDEX)
        this.startQuoteTimer()
      }, 10000)
    },

    submitInterest () {
      const email = this.interestEmail

      if (/\S+@\S+\.\S+/.test(email)) {
        this.$root.$options.$tracker.identify({email})
        this.$root.$options.$tracker.trackAction('interest', this.interestOpts)

        this.didSubmitInterest = true
      } else {
        this.interestEmailError = 'Sorry, that doesn’t look like a valid email address.'
      }
    }
  },

  watch: {
    interestEmail () {
      this.interestEmailError = null
    }
  }
}
</script>
