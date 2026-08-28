import { Button } from '@/components/ui/button';
import products from '@/routes/products';
import { Head, Link, usePage, } from '@inertiajs/react';
import { Megaphone } from "lucide-react"
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
}

interface PageProps {
	flash?: {
		message?: string;
	};
	allProducts: Product[];
}

export default function Index() {
	const { allProducts, flash } = usePage().props as unknown as PageProps;
	return (
		<>
			<Head title="Products" />
			<div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
				<Link href={products.create()} >
					<Button>Add Product</Button>
				</Link>
				<div className='m-4'>
					<div>
						{flash?.message && (
							<div className="grid w-full max-w-md items-start gap-4">
								<Alert>
									<Megaphone />
									<AlertTitle>Notification</AlertTitle>
									<AlertDescription>
										{flash?.message}
									</AlertDescription>
								</Alert>
							</div>
						)}
					</div>

				</div>
				{allProducts.length > 0 && (
					<Table>
						<TableCaption>A list of your recent products.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Id</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Description</TableHead>
								<TableHead className="text-right">Price</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{allProducts.map((product) => (
								<>
									<TableRow>
										<TableCell className="font-medium">{product.id}</TableCell>
										<TableCell>{product.name}</TableCell>
										<TableCell>{product.description}</TableCell>
										<TableCell className="text-right">${product.price}</TableCell>
									</TableRow>
								</>
							))}


						</TableBody>
					</Table>
				)}
			</div>
		</>
	);
}

Index.layout = {
	breadcrumbs: [
		{
			title: 'Products',
			href: products.create(),
		},
	],
};
