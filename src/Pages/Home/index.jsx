import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from '../../Components/Card';
import Cmts from '../../Components/Cmts';
import { Context } from "../../Context";
import ModalNew from "../../Components/ModalNew";

const Home = () => {
  const context = useContext(Context);
  const cmts = Cmts;

  return (
    <Layout>
      <div className="justify-center flex flex-wrap gap-4">
        {
          cmts?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        }
        {context.isModalNewOpen ? <ModalNew /> : false}
      </div>
    </Layout>
  )
}

export default Home;
