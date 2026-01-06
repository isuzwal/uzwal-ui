interface Childprops {
  children: React.ReactNode;
}
export const Screen = ({ children }: Childprops) => {
  return (
    <div className=" max-w-7xl mx-auto w-full dark:bg-black  bg-white">
      {children}
    </div>
  );
};
