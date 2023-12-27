import React, { Fragment } from "react";
const items = [
  { title: "AAAAA", body: "asssss ddddd fffff gggggggg" },
  { title: "BBBBB", body: "bbbb dddd gggg hhhhh jjjhdgf" },
  { title: "CCCCC", body: "dgfg frhhjhn dhehyj sfrr" },
  { title: "DDDD", body: "dhhhtyj hhhh 6ojj jgtrjohjo" },
];
const Dlist = ({ items }) => {
  // const { items } = props; // we do object destructuring

  return (
    <dl>
      {items?.map((item, i) => (
        <Fragment key={item.title + 1}>
          <dt>{item.title}</dt>
          <dd>{item.body}</dd>
        </Fragment>
      ))}
    </dl>
  );
};
const FragmentDemo = () => {
  return (
    // <React.Fragment>
    // <h3>Topper Skills</h3><p>Pune</p>

    // </React.Fragment>
    // <Fragment>
    // <h3>Topper Skills</h3><p>Pune</p>

    // </Fragment>
    <>
      <h3>Topper Skills</h3>
      <p>Pune</p>
      <Dlist items={items} />
    </>
  );
};

export default FragmentDemo;

// For Practice :

// import React, { Fragment } from "react";
// const items = [
//   { title: "AAAA", body: "nfnrfgjogoggj6oph6poh6hhoih" },
//   { title: "BBBB", body: "nfnrfgjogoggj6oph6poh6hhoih" },
//   { title: "CCCA", body: "nfnrfgjogoggj6oph6poh6hhoih" },
//   { title: "DDDD", body: "nfnrfgjogoggj6oph6poh6hhoih" },
// ];
// const Dlist = ({ items }) => {
//   //   const { items } = props; // we do object destructuring
//   return (
//     <dl>
//       {
//         items?.map((item, i) => (
//           // below we cannot give empty i.e<></> because we use key(props)
//           <Fragment key={item.title + 1}>
//             <dt>{item.title}</dt>
//             <dd>{item.body}</dd>
//           </Fragment>
//         )) //we cannot return(take) two element directly for that we have to take that element inside <div></div>
//       }
//     </dl>
//   );
// };
// const FragmentDemo = () => {
//   return (
//     <>
//       <h3>Topper Skills</h3>
//       <p>Pune</p>
//       <Dlist {...items} />// spread operator is used
//     </>
//   );
// };

// export default FragmentDemo;
