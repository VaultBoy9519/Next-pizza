import * as React from 'react'

export interface PayOrderTemplateProps {
	orderId: number
	paymentUrl: string
	totalAmount: number
}

export const PayOrderTemplate: React.FC<Readonly<PayOrderTemplateProps>> = ({ orderId, totalAmount, paymentUrl }) => (
	<div>
		<h1>Заказ #{orderId}</h1>
		<p>
			Оплатите заказ на сумму {totalAmount} ₽. Перейдите <a href={paymentUrl}>по этой ссылке</a> для оплаты заказа.
		</p>
	</div>
)
