import { format } from "date-fns";

import { getBlockedUsers } from "@/lib/blockService";
import { DataTable } from "@/components/ui/DataTable";
import { columns } from "@/components/community/ColumnDef";

const Page = async () => {
  const data = await getBlockedUsers();

  const formattedData = data.map((block) => ({
    ...block,
    userId: block.blocked.id,
    imageUrl: block.blocked.imageUrl,
    username: block.blocked.username,
    createdAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy"),
  }));

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Community Settings</h1>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
};

export default Page;
