// import Layout from '../components/Layout'
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";
import Sidebar from "../../components/Profile/Sidebar";
import { Header } from "../../components/Profile/Header";
import { Card } from "../../components/Profile/Card";
import { useState } from "react";
// import profileMiddleware from '../../utils/profileMiddleware'

const Profile = ({ user, children, title, headerTitle }) => {
  // const { user: session } = useSession();
  return (
    <div className=" grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar user={user} />
      <main className="lg:col-span-3 xl:col-span-5 bg-white p-8 h-[100vh] overflow-y-scroll">
        <Header user={user} headerTitle={headerTitle} />
        <div>
          <h1 className="text-2xl font-bold text-fondo-100">{title}</h1>
        </div>
        <section className="">{children}</section>
      </main>
    </div>
  );
};

export default Profile;

// export async function getServerSideProps(context) {
//   return await profileMiddleware(context)
// }
