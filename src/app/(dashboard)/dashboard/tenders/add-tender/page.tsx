import { CreateTender } from '@/components/Forms';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AddTender = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new tender</CardTitle>
      </CardHeader>
      <CardContent>
        <CreateTender />
      </CardContent>
    </Card>
  );
};
export default AddTender;
