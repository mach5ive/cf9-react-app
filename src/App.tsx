// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";

  //   type PropsA = {
  //       title: string;
  //       description: string;
  //   }
  //
  //   type PropsB = {
  //       title: string;
  //       description: string;
  //   }
  //
  // //   UNION
  //   type Stqtus = "Error" | "Warning" | "Info";
  //
  // //   Tuples
  //   type Coordinates = [number, number];
  //
  // //   Functions
  //   type ClickHandler = (event: MouseEvent) => void;
  //
  // //   INTERSECTION
  //   type Props = PropsA & PropsB;
  //
  //   interface PropsTwo {
  //       title: string;
  //       description: string;
  //   }
  //
  //   interface PropsTwo {
  //       price: number,
  //       sort: number,
  //   }
  //
  // //   PropsTwo = {title, description, price, sort}
  //
  //   interface PropsThree extends PropsTwo {
  //       image: string,
  //   }
  //
  // //   PropsThree = {title, description, price, sort, image}

function App() {

  return (
    <>
      {/*LESSON TWO*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}

      {/*LESSON THREE*/}
      <ArrowFunctionalComponentWithProps
          title="Heading1"/>
      <ArrowFunctionalComponentWithProps
          title="Second Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolor facilis fugit necessitatibus, nulla provident suscipit voluptatem voluptates voluptatum."
      />

      <Layout>
          <ArrowFunctionalComponentWithProps
              title="Second Title"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolor facilis fugit necessitatibus, nulla provident suscipit voluptatem voluptates voluptatum."
          />
          <p className='text-red-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi cupiditate dolorem doloremque dolorum eius harum ipsa libero maxime minima molestiae odio odit officiis placeat porro possimus quasi quis quisquam quo quos, rem repellendus sapiente veritatis voluptatem. Asperiores autem distinctio dolorum eaque? Ad aliquid architecto corporis distinctio earum expedita iure laudantium non qui quibusdam reiciendis, rem repellendus repudiandae sed sequi soluta unde. Animi consectetur consequuntur cupiditate delectus deleniti distinctio doloremque dolores eius eveniet ex facilis fuga fugiat fugit in laudantium magnam natus nesciunt non nostrum praesentium quaerat quod, rem repellendus tempore velit voluptas voluptates. A deleniti dolores illum nam!</p>
      </Layout>
    </>
  )
}

export default App
