import Layout from "../../Components/Layout";

const About = () => {

    return (
        <Layout>
            <div className="border-x-2 h-screen w-3/4 flex flex-col items-center-center px-12">
                <p className="text-center my-4">
                    This app was made by Daniel Velásquez to support the construction of CLI configuration scripts 
                    for the CMTS Cisco CBR8, Arris E6000, Casa C100G and Harris CmtsOS.
                </p>
                <p className="text-center my-4">
                    The user of this app might know about the CLI of each CMTS reference, how to apply and what do
                    each of commands to execute in the gears.
                </p>
                <p className="text-center my-4">
                    Please! review the commands befor to apply them and make sure are correct.
                </p>
                <p className="text-center my-4">
                    Notice: The developer does not responsible of wrong use of the commands supplied for this app or
                    for some error in the commands script. Always review the script.
                </p>
            </div>
        </Layout>
    );

}

export default About;