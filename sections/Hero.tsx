interface Props {
  /**
   * @description The description of name.
   * @format rich-text
   */
  content?: string;
}

export default function Hero({ content = "<h1>SandBox</h1>" }: Props) {
  return (
    <div
      class="w-full flex justify-center bg-black h-screen text-white text-5xl items-center"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
