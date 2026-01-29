import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Briefcase, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Active Companies",
    value: "2,350",
    change: "+180.1% from last month",
    icon: BuildingIcon,
    trend: "up",
  },
  {
    title: "Active Jobs",
    value: "12,234",
    change: "+19% from last month",
    icon: Briefcase,
    trend: "up",
  },
  {
    title: "Active Users",
    value: "573",
    change: "+201 since last hour",
    icon: Users,
    trend: "up",
  },
];

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Last updated: Just now</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:bg-white/5 transition-colors cursor-pointer group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <span className="text-green-400 flex items-center">
                  {stat.change}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-center justify-center text-gray-500">
              Chart Placeholder (Recharts or similar)
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none text-white">
                      New company registered
                    </p>
                    <p className="text-xs text-gray-400">
                      Acme Corp just signed up.
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-sm text-gray-400">
                    +1m ago
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
