import { useParams } from "react-router-dom";

const profileData = {
  velopert: {
    name: "김민준",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};

const Profile = () => {
  const { username } = useParams();
  console.log(username)
  const profile = profileData[username];
  // profileData 의 key에 접근해서 value 가져오기 

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h2>
        {username} ({profile.name})
      </h2>
      <p>{profile.description}</p>
      <p>Profile</p>
    </div>
  );
};

export default Profile;
