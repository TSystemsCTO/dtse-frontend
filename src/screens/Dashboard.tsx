import Billing from "@/components/Billing";
import Chart from "@/components/Chart";
import FiberCard from "@/components/FiberCard";
import Header from "@/components/Header";
import Procurement from "@/components/Procurement";
import VendorPerformance from "@/components/VendorPerformance";

export default function Dashboard() {

    const cardData = [
        {
            imageSrc: "/images/fiber-cards/1.png",
            count: 75,
            title: "Total Orders",
            arrowType: "up",
            percentage: 4,
            timeFrame: "30 days"
        },
        {
            imageSrc: "/images/fiber-cards/2.png",
            count: 40,
            title: "Total Delivered",
            arrowType: "up",
            percentage: 4,
            timeFrame: "30 days"
        },
        {
            imageSrc: "/images/fiber-cards/3.png",
            count: 10,
            title: "Total Canceled",
            arrowType: "down",
            percentage: 25,
            timeFrame: "30 days"
        },
        {
            imageSrc: "/images/fiber-cards/4.png",
            count: 25,
            title: "Claim Started",
            arrowType: "down",
            percentage: 12,
            timeFrame: "30 days"
        }
    ];

    return (
        <div className="bg-[#EEEEEE] p-6 min-h-screen">
            <Header />
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="mb-6">Fiber Optics Orders</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {cardData.map((card, index) => (
                    <FiberCard
                        key={index}
                        imageSrc={card.imageSrc}
                        count={card.count}
                        title={card.title}
                        arrowType={card.arrowType}
                        percentage={card.percentage}
                        timeFrame={card.timeFrame}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
                <Procurement />
                <VendorPerformance />
                <div>
                    <h1 className="text-2xl font-bold mb-4">Billing and Invoices</h1>
                    <Billing/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Technical Team</h1>
                    <Chart />
                </div>

            </div>
        </div>
    );
}
