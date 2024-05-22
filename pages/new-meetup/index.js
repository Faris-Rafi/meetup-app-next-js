import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    const { data } = await axios.post("/api/new-meetup", meetupData);

    console.log(data);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
