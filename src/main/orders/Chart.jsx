import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

const Chart = ({ value, time }) => {
  const arrayData = value.filter((x) => x.status === "Успешно");

  const result = Object.values(
    arrayData.reduce((acc, curr) => {
      const date = curr.date.toDateString();
      if (!acc[date]) {
        acc[date] = { date: curr.date, summ: 0 };
      }
      acc[date].summ += parseFloat(curr.summ);
      return acc;
    }, {})
  );

  const data = [];
  for (let num = time; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: result[num] ? result[num].summ : 0,
    });
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="1" y1="1" x2="0" y2="1">
            <stop offset="0%" stopColor="#1D232C" stopOpacity={0.4} />
            <stop offset="60%" stopColor="#B142F5" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          dataKey="value"
          strokeWidth={2}
          stroke="#9E13F3"
          fill="url(#color)"
        />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate()) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={8}
          type="number"
          domain={[0, "dataMax + 1050000"]}
          allowDataOverflow={true}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>{payload[0].value} Т</p>
      </div>
    );
  }
  return null;
};
