import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <Card className='max-w-[400px]'>
        <CardHeader className='flex gap-3'>
          <div className='flex flex-col'>
            <p className='text-md'>NextUI</p>
            <p className='text-small text-default-500'>nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>Visit source code on GitHub.</CardFooter>
      </Card>
    </section>
  );
}
