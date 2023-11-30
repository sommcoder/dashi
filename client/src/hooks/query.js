// import { useQuery } from "@tanstack/react-query";

// async function fetchItems() {
//   const res = await fetch(import.meta.env.DEV_SERVER_URL);
//   const items = await res.json();
//   console.log("items:", items);
// }

// export const GetAllItems = (id, options) => {
//   // consistent default options for this query "group":
//   const queryOptions = {
//     staleTime: 300,
//     enabled: !!id,
//     ...options, // allows for some customization PER hook call
//   };

//   // we are returning the Result object as the return for our custom hook
//   return useQuery({
//     queryKey: ["get"],
//     queryFn: fetchItems(),
//   });
};

// this would be a great way of reducing code on each component/page that needs to make a query or mutation.

/* 
- Make a hooks folder, make a file for each useQuery / useMutation. This makes them reuseable and makes sure you dont get your query keys mixed up. Whenever you need the data you just call your hook e.g. "usePosts" if you're fetching posts.

Some other general react query pointers:

For queries you can use parameters for your custom hooks (remember to also add the unique parameters to the query keys array)


Defaults Explained:
React Query DOES NOT invoke the queryFn on every re-render, even with the default stalteTime of zero.

Your app can re-render for various reasons at any time, so refetching every time would be INSANE!

If you see a refetch that you are not expecting, it is likely becasue you just FOCUSED the window and React Query is doing a refetchOnWindowFocus, which is a great feature for production: if the user goes to a different browser tabd, and then comes back to your app, a background refetch will be triggered automatically, and data on teh screen will be updated if something has changed on the server in the meantime.

ALL of this happens without a loading spinner being shown, and your component will NOT re-render if the data is the SAME as you currently have in the cache.

During development, this will probably be triggered more frequently, especially because focusing between the Browser DevTools and your app will also cause a fetch, so be AWARE of that.

UPDATE: Since React Query v5, refechOnWindowFocus no longer listens to the focus event - the visibilitychange event is used exclusively. This means you'll get fewer unwanted re-fetches in development mode, while still retaining the trigger for most production cases. It also fixes a bunch of issues as shown here.

*/
