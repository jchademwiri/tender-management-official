import CreateTender from '@/components/Forms/CreateTender';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const AddTender = () => {
  return (
    <Card>
      <CardHeader>Create a new tender</CardHeader>
      <CardContent>
        <CreateTender />
      </CardContent>
    </Card>
  );
};
export default AddTender;
