export function tagRemoveHandler(event, context) {
  const pNode = event.target.parentNode;
  const tag = pNode.getAttribute("data-value");
  //   const type = pNode.getAttribute("data-type");
  //   console.log(context.tags);

  let newTags = context.tags.filter((element) => element.tag !== tag);
  //   console.log(newTags);

  context.setTags(newTags);
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      let x = data.filter((d) => {
        let dataTags = [
          ...d.languages,
          ...d.tools,
          d.role,
          d.level,
          d.new ? "New" : "",
          d.featured ? "Featured" : "",
        ];
        dataTags = dataTags.filter((d) => d !== "");
        // console.log(dataTags);
        let b = newTags.every((d1) => {
          // console.log(d1);
          // let v = Object.keys(dataTags);
          // console.log("v", v);

          let x = dataTags.indexOf(d1.tag) + 1;
          //   console.log(x);
          return x;
        });
        // console.log(b);

        return b;
      });
      //   console.log(x);
      context.setData(x);
    });
}
export function clearTags(event, context) {
  context.setTags([]);
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => context.setData(data));
}
export function tagHandler(event, ctx) {
  // console.log(event.target);
  const tag = event.target.getAttribute("data-value");
  const type = event.target.getAttribute("data-type");
  // console.log(tag, type);
  let obj = ctx.currentTags;
  const newObj = { tag: tag, type: type };
  const included = ctx.tags.some(
    (element) => JSON.stringify(element) === JSON.stringify(newObj)
  );
  if (!included) {
    // console.log(ctx.tags.includes({ tag: tag, type: type }));

    let newTags = [...ctx.tags, newObj];
    // console.log(newTags);
    // console.log(typeof newTags);

    ctx.setTags(newTags);
    obj.count += 1;
    if (["languages", "tools"].includes(type)) {
      ctx.setData(ctx.data.filter((d) => d[type].includes(tag)));
      obj.tags[type].push(tag);
    } else if (["role", "level"].includes(type)) {
      ctx.setData(ctx.data.filter((d) => d[type] === tag));
      obj.tags[type] = tag;
    } else if (["new", "featured"].includes(type)) {
      ctx.setData(ctx.data.filter((d) => d[type]));
      obj.tags[type] = true;
    }

    ctx.setCurrentTags(obj);
  }
}
