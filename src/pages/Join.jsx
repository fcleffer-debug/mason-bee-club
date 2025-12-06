import SubscribeForm from "../components/SubscribeForm";

export default function Join() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Join the Mason Bee Club 🐝
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Welcome! We’re building the first community-driven Mason Bee observation
        network. Soon you’ll be able to watch live stations, track cocoons,
        follow hatchings in real time, and explore a shared map of bee homes
        across the region.
        <br /><br />
        For now, we're inviting early beta members.
        Enter your email below to join the list — you’ll be notified as
        features go live!
      </p>

      <SubscribeForm />
    </div>
  );
}
