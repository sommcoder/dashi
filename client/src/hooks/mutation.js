// import { useMutation } from "@tanstack/react-query";

// /*
// Use mutations for anything that creates, deletes or modifies something (USUALLY things that are triggered by user input, such as a button).

// Pass the params to the mutation, not the hook itself (the third generic type to useMutation for typescript). They will be passed once you call .mutate / .mutateAsync on the hook instance

// Whenever you mutate something (e.g. create a post), in that hook, add an onSuccess callback in which you invalidate any data that needs to be refetched (e.g. you list posts, then create a new post, you'll want the post list to be instantly refetched) using useQueryClient.invalidateQueries([])
// */

// function postItemFn() {}

// export const PostItem = (id, options) => {
//   const mutation = useMutation({
//     mutationFn: postItemFn(),
//     onSuccess: (data, variables, context) => {
//       // I will fire first
//     },
//     onError: (error, variables, context) => {
//       // I will fire first
//     },
//     onSettled: (data, error, variables, context) => {
//       // I will fire first
//     },
//   });

//   // use Mutation returns an object instead of an array
//   return mutation;
// };
