// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";

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
      {/*<ArrowFunctionalComponentWithProps*/}
      {/*    title="Heading1"/>*/}
      {/*<ArrowFunctionalComponentWithProps*/}
      {/*    title="Second Title"*/}
      {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolor facilis fugit necessitatibus, nulla provident suscipit voluptatem voluptates voluptatum."*/}
      {/*/>*/}

      {/*  LESSON FOUR*/}
      {/*<Layout addClasses="bg-gray-50">*/}
      {/*    /!*<ArrowFunctionalComponentWithProps*!/*/}
      {/*    /!*    title="Second Title"*!/*/}
      {/*    /!*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut dolor facilis fugit necessitatibus, nulla provident suscipit voluptatem voluptates voluptatum."*!/*/}
      {/*    /!*//*/}
      {/*    /!*<Counter/>*!/*/}
      {/*    /!*<ClassCounter />*!/*/}
      {/*    <CounterAdvanced/>*/}
      {/*</Layout>*/}

      {/*  LESSON FIVE*/}
        <Layout addClasses="bd-gray-50">
            {/*<NameChanger/>*/}
            <CounterWithCustomHook/>
        </Layout>
    </>
  )
}

export default App
