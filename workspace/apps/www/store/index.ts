import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

import {
  events,
  books,
  categories,
  courses,
  centers,
  blogs,
  contributors,
  shlokas,
} from "./data";

const cache = new InMemoryCache();

// await before instantiating ApolloClient, else queries might run before the cache is persisted
// @TODO: this setup is not working with SSR
// (async () => {
//   await persistCache({
//     cache,
//     storage: new LocalStorageWrapper(window.localStorage),
//   });
// })();

const client = new ApolloClient({
  cache: cache,
  ssrMode: true,
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy: "cache-only",
    },
  },
});

async function writeInitialData() {
  cache.writeQuery({
    query: gql`
      query GetTodosNetworkStatusAndFilter {
        events
        books
        categories
        courses {
          id
          title
          description
          price
          discount
          rating
          totalRatings
          totalStudents
          totalHours
          totalLessons
          totalQuizzes
          totalAssignments
          totalDownloads
          totalViews
          totalLikes
          totalComments
          totalShares
          totalBookmarks
        }
        centers {
          id
          title
          description
          address
          city
          state
          country
          pincode
          phone
          email
          website
        }
        blogs
        contributors
        shlokas

        networkStatus {
          isConnected
        }
      }
    `,
    data: {
      events,
      books,
      categories,
      courses,
      centers,
      blogs,
      contributors,
      shlokas,

      networkStatus: {
        __typename: "NetworkStatus",
        isConnected: false,
      },
    },
  });
}

writeInitialData();

client.onResetStore(writeInitialData);

export default client;
