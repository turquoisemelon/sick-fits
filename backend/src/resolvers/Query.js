const { forwardTo } = require("prisma-binding");

// this is a Resolver
const Query = {
  items: forwardTo('db'),
  
  // if you have same quries both on your prisma and your yoga graphql erver and you don't care about authentication etc, you can just forward from prisma query to graphql yoga query
  // the code below is custom logic for the query above

  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();

  //   return items;
  // }
};

module.exports = Query;
