import React from 'react';
import {
  ResponsiveLineChart,
  exampleData,
  Card,
  CardBody,
} from 'Components/Elements';

console.log(exampleData);

const DataPage = () => (
  <div className="h-auto">
    <h1 className="text-3xl font-bold underline text-center">Data Page</h1>
    <div className="flex lg:flex-row md:flex-col sm:flex-col">
      <Card className="w-full lg:w-1/2 justify-center m-2">
        <CardBody className="h-screen">
          <ResponsiveLineChart data={exampleData} />
        </CardBody>
      </Card>
      <Card className="w-full md:w-1/2 justify-center m-2">
        <CardBody className="h-screen">
          <ResponsiveLineChart data={exampleData} />
        </CardBody>
      </Card>
    </div>
  </div>
);

export default DataPage;
