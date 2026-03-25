export const uploadblog = async (blog) => {
  let fd = new FormData();
  fd = blog;
  let val = Object.fromEntries(fd.entries());
  await fetch("/blog/upload", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getallblogs = async (author) => {
  let blogdata;
  await fetch(`/blog/getall/${author}`)
    .then((res) => res.json())
    .then((data) => (blogdata = data));
  return blogdata;
};

export const updateblog = async (blog, id) => {
  let fd = new FormData();
  fd = blog;
  let val = Object.fromEntries(fd.entries());
  console.log(val);
  await fetch(`/blog/update/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val),
  });
};

export const deleteblog = async (id) => {
  await fetch(`/blog/delete/${id}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
