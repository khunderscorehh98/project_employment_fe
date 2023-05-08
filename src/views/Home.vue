<template>
  <div>
    <section class="bgAlpha">
      <Jumbotron />

    </section>
    <v-container>
      <Searchbar />
      <section>
        Welcome to our website! We are a premier platform that connects clients and
        freelancers from all around the world. Our mission is to create a seamless
        experience for both parties by providing a user-friendly interface that
        simplifies the process of finding and hiring top talent. For clients, we
        understand that finding the right freelancer for your project can be
        time-consuming and challenging. That's why we have a vast pool of talented
        individuals with diverse skill sets, all at your fingertips. Whether you
        need a graphic designer, a web developer, or a content writer, we have the
        perfect match for your needs. We also understand that every project is
        unique, and that's why we provide a custom bidding system that allows you to
        set your budget and timeline while receiving competitive proposals from
        top-rated freelancers. You can review their profiles, portfolios, and
        reviews to make an informed decision, and once you've selected your
        freelancer, you can communicate with them directly through our secure
        platform to ensure that your project is completed to your satisfaction. For
        freelancers, we know that finding clients and projects that match your
        skills and interests can be a daunting task. That's why we provide a
        platform that allows you to showcase your skills, experience, and portfolio
        to potential clients. You can browse through a vast range of job postings,
        apply for those that fit your expertise, and communicate with clients
        directly to negotiate rates and timelines. We believe in empowering
        freelancers to take control of their careers by providing them with the
        resources and support they need to succeed. From our comprehensive knowledge
        base to our community forums, we're here to help you every step of the way.
        At our platform, we're dedicated to providing a seamless and enjoyable
        experience for clients and freelancers alike. So, whether you're looking to
        hire top talent or find your next project, we've got you covered. Join our
        community today and experience the future of freelancing!
      </section>
    </v-container>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import Searchbar from "../components/SearchPeople.vue";

export default {
  components: {
    Jumbotron,
    Searchbar,
  },
};
</script>

<style lang="scss" scoped>
.bgAlpha{
  background-color: rgba(0, 0, 0, 0.5);
}
</style>