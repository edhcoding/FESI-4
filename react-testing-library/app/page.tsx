import MyInput from "@/components/MyInput";
import UpperInput from "@/components/UpperInput";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <>
      <UpperInput />
      <MyInput />
    </>
  );
}
