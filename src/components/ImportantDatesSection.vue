<template>
  <div class="bg-gradient-gray">
    <section class="container py-4">
      <div class="row">
        <div class="col-12">
          <table class="table table-responsive">
            <thead>
              <tr>
                <th scope="col" class="h3 align-bottom" colspan="2">
                  Important Speaker Dates
                </th>
                <th scope="col" class="h5 align-bottom">Submissions Due</th>
                <th scope="col" class="h5 align-bottom">
                  Acceptance Notifications
                </th>
                <th scope="col" class="h5 align-bottom">Event</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(date, index) in dates" :key="index">
                <td class="align-middle" style="width: 1%">
                  <img
                    class="img-calendar-check"
                    src="~assets/images/calendar-check.svg"
                  />
                </td>
                <td class="h5 align-middle font-weight-normal text-uppercase">
                  {{ date.title }}
                </td>
                <td class="h5 align-middle font-weight-normal">
                  {{ date.due }}
                </td>
                <td class="h5 align-middle font-weight-normal">
                  {{ date.notifications }}
                </td>
                <td class="h5 align-middle font-weight-normal">
                  {{ date.event }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dates
      dates: [
        {
          due: 'Feb 22',
          notifications: 'Mar 4',
          event: 'May 6',
          title: 'Chicago'
        },
        {
          due: 'Jun 1',
          notifications: 'Jul 1',
          event: 'Sep 20',
          title: 'Portland'
        },
        {
          due: 'Jul 1',
          notifications: 'Jul 31',
          event: 'Oct 4',
          title: 'New York Metropolitan'
        },
        {
          due: 'Aug 1',
          notifications: 'Aug 31',
          event: 'Nov 1',
          title: 'Dallas'
        },
        {
          due: 'Sep 1',
          notifications: 'Sep 30',
          event: 'Dec 6',
          title: 'San Francisco'
        }
      ]
    }
  }
}
</script>
