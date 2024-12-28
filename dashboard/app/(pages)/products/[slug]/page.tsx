import Title from "@/components/title";
import Form from "@/components/form";
import { getProductById } from "@/utils/api";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const isAdd = params.slug === "new";

  // eğer düzenleme modundaysak düzenlenicek elemanın verilerini api'dan alamamız lazım
  let editItem;

  if (!isAdd) {
    editItem = await getProductById(params.slug);
  }

  return (
    <div>
      <Title>{isAdd ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}</Title>

      <Form editItem={editItem} />
    </div>
  );
};

export default Page;
