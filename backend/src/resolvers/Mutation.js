const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    // this is a Promise
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  }
  // createDog(parebt, args, ctx, info) {
  //   global.dos = global.dogs || [];
  //   // create a dog!
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = Mutations;
